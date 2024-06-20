import { organization } from "@/app/content/content";

const OrganizationPage = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="org-container">
        <p className="organization-header">About</p>
        <p className="organization-content">{organization.about}</p>
      </div>
      <div className="org-container ">
        <p className="organization-header">Mission</p>
        <p className="organization-content">{organization.mission}</p>
      </div>
      <div className="org-container ">
        <p className="organization-header">Type of Work</p>
        <ul className="organization-content list-inside space-y-2 flex flex-col items-center">
          {organization.procceses.map((process, index) => (
            <li
              className="bg-gray-200 rounded-xl p-4 w-fit text-center"
              key={index}
            >
              {process}
            </li>
          ))}
        </ul>
      </div>
      <div className="org-container ">
        <p className="organization-header">Organization Structure</p>
        <div className="space-y-6">
          <p className="organization-content">
            Inspired by Spotify and Bloomberg our organization utilizes a
            framework that promotes ownership and expertise. We allow for
            students to specialize within 1 of 2 groups: consultancy or
            engineering. Groups meet on a monthly basis while project teams meet
            on a weekly basis.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
            <div className="flex flex-col p-4 bg-gray-100 rounded-2xl space-y-3">
              <p className="organization-content text-center">Consultancy</p>
              <p className="organization-content">
                The consultancy group is a collection of students that
                specialize in consulting. They meet on a monthly basis to
                discuss the latest consulting trends and to provide advice to
                the engineering group.
              </p>
            </div>

            <div className="flex flex-col p-4 bg-gray-100 rounded-2xl space-y-3">
              <p className="organization-content text-center">Engineering</p>
              <p className="organization-content">
                The engineering group is a collection of students that
                specialize in engineering. They meet on a weekly basis to
                discuss the latest engineering trends and to provide advice to
                the consultancy group.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationPage;
