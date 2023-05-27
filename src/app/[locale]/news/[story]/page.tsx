"use client";
import PageLayout from "@src/components/PageLayout";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { News } from "@src/constants/content/news";
import { notFound } from "next/navigation";
import { CarouselCardType } from "@src/constants/types";
import Image from "next/image";

export default function Page() {
  const pathname = usePathname();
  const storyPathName = pathname.substring(pathname.lastIndexOf("/") + 1);
  const t = useTranslations("NewsPage");
  const item: CarouselCardType | undefined = News.find(
    (item) => item.id === storyPathName
  );

  return (
    <>
      {item ? (
        <PageLayout title={t("title")}>
          <section
            className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden -mb-1"
            id="top"
            data-section="section1"
          >
            <div
              className="absolute h-full bottom-0 w-full bg-themeyellow z-0"
              id="bottom_gradient"
            ></div>
            <div
              className={`flex-col flex w-full justify-center items-start ml-52 z-[1]`}
            >
              <div className="bg-themedarkblue text-white p-5 text-2xl text-bold">
                {t("title")}
              </div>
              <div className="text-white text-8xl">{item.title}</div>
            </div>
          </section>
          <div className="min-min-h-screen min-w-screen flex justify-center my-20">
            <div className="w-2/3">
              <div className="my-20">
                <h1 className="text-4xl text-bold">{item.title}</h1>
                {item.subtitle && <h2 className="text-2xl">{item.subtitle}</h2>}
                {item.writer && <span>{item.writer}</span>}
                {item.date && <span>{item.date}</span>}
              </div>
              <div className="relative bg-black h-[600px] w-full">
                <Image
                  fill
                  className="object-cover w-full h-full"
                  src={item.image_src}
                  alt="Sunset in the mountains"
                />
              </div>
              <p className="whitespace-pre-line my-20 text-lg">
                {item.content}
              </p>
            </div>
          </div>
        </PageLayout>
      ) : (
        notFound()
      )}
    </>
  );
}
