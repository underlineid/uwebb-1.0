import { Button, Spin } from "antd";
import { PlusCircleFilled as Plus } from "@ant-design/icons";
import ContentBox from "../../components/page/ContentBox";
import PageHeader from "../../components/page/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { getUserId, supabaseClient } from "../../helpers/util";
import { setSiteUser } from "../../redux/siteUser";
import AddSitePopup from "./AddSitePopup";
import YourSite from "./YourSite";

const supabase = supabaseClient;

export default function Dashboard() {
  const [openCreate, setOpenCreate] = useState(false);

  const siteUser = useSelector((state) => state.siteUser.value);
  const dispatch = useDispatch();

  const openModal = () => setOpenCreate(true);

  const onSuccessAddSite = () => {
    const callback = () => setOpenCreate(false);
    getData(callback);
  };

  const getData = useCallback(
    async (callback) => {
      const userId = getUserId();

      const { data: site, error } = await supabase
        .from("site")
        .select("*")
        .eq("user", userId);

      setTimeout(() => {
        if (site) {
          if (site.length < 1) dispatch(setSiteUser("empty"));
          else if (site.length > 0) dispatch(setSiteUser(site));

          if (typeof callback === "function") callback();
        }
      }, 3000);
    },
    [dispatch]
  );

  useEffect(() => {
    if (!siteUser) getData();
  }, [siteUser, getData]);

  console.log({ siteUser });

  let viewSite = (
    <div className="in-center">
      <Spin />
    </div>
  );
  if (siteUser === "empty")
    viewSite = (
      <div className="in-center">
        <div className="body-info-bold">Kamu belum memiliki site</div>
        <div className="body-info-sub">
          Buat site dengan menyalin link notion dan publish site kamu sekarang
        </div>
      </div>
    );
  else if (siteUser && siteUser.length > 0)
    viewSite = <YourSite siteList={siteUser} />;

  return (
    <>
      <div>
        <PageHeader
          title="Dashboard Overview"
          subtitle="Publish notion anda menjadi website dengan super cepat!"
        />
        <ContentBox
          title="Your Sites"
          rightTitle={
            <Button type="primary" icon={<Plus />} onClick={openModal}>
              Add New Site
            </Button>
          }
        >
          {viewSite}
        </ContentBox>
        <ContentBox title="This may can help you">Hehehehe</ContentBox>
      </div>
      <AddSitePopup
        onSuccess={onSuccessAddSite}
        isOpen={openCreate}
        setOpen={setOpenCreate}
      />
    </>
  );
}
