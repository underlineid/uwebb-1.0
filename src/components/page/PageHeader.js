export default function PageHeader({ title = "Title", subtitle = "Subtitle" }) {
  return (
    <div className="page-header">
      <div className="page-header__title">{title}</div>
      <div className="page-header__subtitle">{subtitle}</div>
    </div>
  );
}
