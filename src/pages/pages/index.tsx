import ApplyPage from "@/app/components/apply";
import ContactPage from "@/app/components/contact";
import OrganizationPage from "@/app/components/organization";
import ProjectPage from "@/app/components/projects";
import WorkWithUsPage from "@/app/components/work-with-us";
import { pages } from "@/app/content/content";
import { pages_types } from "@/app/types";
import { useEffect, useState } from "react";

import "@/app/globals.css";
import { useRouter } from "next/router";

const Pages = () => {
  const router = useRouter();
  const { page } = router.query;
  const [c_page, setPage] = useState<pages_types | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (page) {
      setPage(page as pages_types);
      setLoading(false);
    }
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleChange = (n_page: pages_types) => {
    setPage(n_page);
  };

  return (
    <main className="flex flex-row min-h-screen pb-10">
      <div className="w-[25%]">
        <div onClick={() => router.push("/")}>
          <p>home</p>
        </div>
        {pages.map((page, i) => {
          return (
            <div onClick={() => handleChange(page)} key={i}>
              <p>{page}</p>
            </div>
          );
        })}
      </div>

      <div className="w-[75%] px-5">
        <p className="w-full text-7xl text-center py-10">{c_page}</p>
        {(() => {
          switch (c_page) {
            case pages_types.organization:
              return <OrganizationPage />;
            case pages_types.projects:
              return <ProjectPage />;
            case pages_types.contact:
              return <ContactPage />;
            case pages_types.apply:
              return <ApplyPage />;
            case pages_types.workwithus:
              return <WorkWithUsPage />;
            default:
              return <p>loading</p>;
          }
        })()}
      </div>
    </main>
  );
};

export default Pages;
