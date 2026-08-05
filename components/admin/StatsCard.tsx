interface Props {
    title: string;
    value: number;
}

export default function StatsCard({ title, value }: Props) {
    return (
        <div
            className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        dark:border-slate-800
        dark:bg-slate-900
      "
        >
            <p
                className="
          text-sm
          font-medium
          text-slate-500
          dark:text-slate-400
        "
            >
                {title}
            </p>

            <h2
                className="
          mt-3
          text-3xl
          font-bold
          text-slate-900
          dark:text-slate-100
        "
            >
                {value}
            </h2>
        </div>
    );
}