import img from "../assets/img2.png";
export default function Footer() {
  return (
    <div className="flex items-center font-Poppins text-gray-500 text-[10px] font-bold justify-between md:px-6 lg:px-8">
      <div className="space-x-2">
        <span>More Behance </span>
        <span className="mx-2">|</span>
        <span>English </span>
        <span className="mx-2">|</span>

        <span>TOU</span>
        <span>Privacy</span>
        <span>Community</span>
        <span>Help</span>
        <span>Cookie preferences</span>
        <span>Do not sell or share my personal information</span>
      </div>

      <img src={img} alt="" className="w-20" />
    </div>
  );
}
