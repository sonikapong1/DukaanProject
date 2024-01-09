
const InfoWidget = ({ header, body }) => {


  return (
    <div style={{
      width:609,
      height: 100
    }} className='p-3 shadow-sm bg-white'

    >
      <p className=''>{header}</p>
      <p className='mt-3 h4'>{body}</p>
    </div >
  );
};

export default InfoWidget;
