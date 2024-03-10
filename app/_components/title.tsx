interface TitleProps {
    subTitle: string;
    title: string;
};

export const Title = ({ subTitle, title }: TitleProps) => {
  return (
    <div className='my-10 text-center px-10%'>
      <p className='text-lg font-semibold uppercase text-blue-800'>{subTitle}</p>
      <h2 className='mt-1 text-4xl font-bold normal-case'>{title}</h2>
    </div>
  );
};
