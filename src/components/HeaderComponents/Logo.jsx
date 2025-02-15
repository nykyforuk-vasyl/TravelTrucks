import Icon from "../../ui/Icon";

const Logo = () => {
  return (
    <div className="relative flex h-4 items-end gap-[0.3px] md:justify-start">
      <span>
        <Icon id="icon-T" w={13} h={15} className="fill-black" />
      </span>
      <span>
        <Icon id="icon-R" w={8} h={12} className="fill-black" />
      </span>
      <span>
        <Icon id="icon-A" w={11} h={12} className="fill-black" />
      </span>
      <span>
        <Icon id="icon-V" w={13} h={12} className="fill-black" />
      </span>
      <span>
        <Icon id="icon-E" w={12} h={12} className="fill-black" />
      </span>
      <span>
        <Icon id="icon-L" w={6} h={15} className="fill-black" />
      </span>

      <span>
        <Icon id="icon-T" w={13} h={15} className="fill-darkGrey" />
      </span>
      <span>
        <Icon id="icon-R" w={8} h={12} className="fill-darkGrey" />
      </span>
      <span>
        <Icon id="icon-U" w={12} h={12} className="fill-darkGrey" />
      </span>
      <span>
        <Icon id="icon-C" w={12} h={12} className="fill-darkGrey" />
      </span>
      <span>
        <Icon id="icon-K" w={12} h={14} className="fill-darkGrey" />
      </span>
      <span>
        <Icon
          id="icon-S"
          w={12}
          h={14}
          className="absolute left-[120.7px] top-[3.3px] fill-darkGrey"
        />
      </span>
    </div>
  );
};

export default Logo;
