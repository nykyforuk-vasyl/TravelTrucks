import Input from "../../ui/Input";
import Icon from "../../ui/Icon";

const SidebarLocation = ({ control }) => {
  return (
    <div className="relative mb-10">
      <Input
        control={control}
        name="location"
        placeholder="Kyiv, Ukraine"
        className="peer rounded-[12px] border-none bg-darkWhite px-12 text-black placeholder:text-black"
      />
      <span className="absolute left-[20px] top-[13px] hidden opacity-100 peer-focus:opacity-0 md:block">
        <Icon id="map" w={20} h={20} className="fill-black" />
      </span>
    </div>
  );
};

export default SidebarLocation;
