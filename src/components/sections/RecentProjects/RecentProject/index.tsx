type Props = {
  thumbnail: string;
  name: string;
  tags: string[];
  url: string;
};

export const RecentProject = (props: Props) => {
  const tags = () => props.tags.join(" • ");

  return (
    <a
      href={props.url}
      class="w-[260px] flex flex-col gap-6 flex-shrink-0 first:ml-5 last:mr-5"
    >
      <img
        src={props.thumbnail}
        class="w-full object-cover aspect-square rounded-lg shadow-brand-img"
      />
      <div class="flex flex-col gap-3 px-2 text-brand-text-dark">
        <h4 class="text-3xl">{props.name}</h4>
        <p class="text-sm font-light">{tags()}</p>
      </div>
    </a>
  );
};
