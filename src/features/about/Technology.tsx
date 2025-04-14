import { AnimatedTooltip } from "../../components/tsx/animated-tooltip";
import type { Media, TechnologyBlock } from "../../shared/payload-types";

type Props = {
  technologies: TechnologyBlock["technologies"];
};

function Technology({ technologies }: Props) {
  const isMedia = (value: unknown): value is Media => {
    return typeof value === "object" && value !== null && "url" in value;
  };
  return (
    <div>
      <div className="grid grid-cols-4 place-items-center gap-8 md:grid-cols-8">
        {technologies.map((tech, idx) => (
          <AnimatedTooltip
            key={idx}
            items={{
              href: isMedia(tech.default) ? tech.default.href : "",
              src: isMedia(tech.default)
                ? `http://localhost:3000${tech.default.url}`
                : "",
              name: isMedia(tech.default) ? tech.default.alt : "",
              darkSrc: isMedia(tech.darkMode ?? tech.default)
                ? // @ts-ignore
                  `http://localhost:3000${(tech.darkMode ?? tech.default).url}`
                : "",
              id: idx,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Technology;
