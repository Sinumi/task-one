import {
  DribbleIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/SvgIcon";

const Footer = () => {
  return (
    <footer className="p-6 border-t text-muted text-xs text-center space-y-4">
      <p>© DUGIMAIL. All rights reserved.</p>
      <p>
        If you have any questions please contact us{" "}
        <span className="text-primary">sabrihakuli@outlook.com</span>
      </p>
      <div className="flex gap-5 justify-center">
        <FacebookIcon />
        <DribbleIcon />
        <LinkedinIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
};

export default Footer;
