import SignupBlock from "./signupBlock";

const Footer = () => {
  return (
    <div className=" container bg-secondary p-20 ">
      <p className=" text-primary text-2xl mb-3">Contact Information</p>
      <div className=" flex flex-wrap justify-between  items-end">
        <div>
          <div className="  text-primary text-sm">
            Silwerstrand Estate <br />
            Tel: 023 008 8002
          </div>
          <p className=" text-primary text-sm">hoa@silwerstrand.co.za</p>
          <p className=" text-primary text-sm">
            estatemanager@silwerstrand.co.za
          </p>
        </div>
        <div>
          <div className="  text-primary text-sm">
            Robertson Golf Club <br />
            Tel: 023 626 1090 | Fax: 086 210 4765
          </div>
          <p className=" text-primary text-sm">manager@silwerstrand.co.za</p>
        </div>
        <div>
          <div className="  text-primary text-sm">Silwerstrand Developer</div>
          <p className=" text-primary text-sm">developer@silwerstrand.co.za</p>
        </div>
        <SignupBlock />
      </div>
    </div>
  );
};

export default Footer;
