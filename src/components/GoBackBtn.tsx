const GoBackBtn = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div onClick={handleGoBack} className="go-back-btn">
      go back
    </div>
  );
};

export default GoBackBtn;
