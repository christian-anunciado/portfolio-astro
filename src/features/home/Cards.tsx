import {
  HoverEffect,
  type HoverCardItem,
} from "../../components/tsx/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="mt-5">
      <HoverEffect items={projects as HoverCardItem[]} />
    </div>
  );
}
export const projects = [
  {
    title: "10+",
    description: "Completed Projects",
  },
  {
    title: "7",
    description: "Satisfied Clients",
  },
  {
    title: "Typescript",
    description: "Main Stack",
    itemType: "text",
  },

  {
    title: "3+",
    description: "Developer Experience",
  },
  {
    title: "GoLang",
    description: "Currently Learning",
    itemType: "text",
  },
];
