import { AnimatedTooltip } from "../../components/tsx/animated-tooltip";
import type { Icon, TechnologyBlock } from "../../shared/payload-types";

type Props = {
  technologies: TechnologyBlock["technologies"];
};

function Technology({ technologies }: Props) {
  // return icon if it is an icon
  const isIcon = (value: unknown) => {
    if (typeof value === "object" && value !== null && "src" in value) {
      return value as Icon;
    }
    return null;
  };
  return (
    <div>
      <div className="grid grid-cols-4 place-items-center gap-8 md:grid-cols-8">
        {technologies.map((tech, idx) => {
          const icon = isIcon(tech.default);
          if (!icon) return null;
          return (
            <AnimatedTooltip
              key={idx}
              items={{
                href: icon.source,
                src: icon.src,
                name: icon.name,
                darkSrc: icon.darkModeSrc?.length > 0 ? icon.darkModeSrc : null,
                id: idx,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Technology;
