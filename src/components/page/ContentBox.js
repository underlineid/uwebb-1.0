export default function ContentBox({ title = "", rightTitle = "", children }) {
  return (
    <div className="content-box">
      {title && (
        <div className="content-box__title">
          <div className="cb__title-text">{title}</div>
          {rightTitle && <div>{rightTitle}</div>}
        </div>
      )}
      {children && <div className="content-box__content">{children}</div>}
    </div>
  );
}
