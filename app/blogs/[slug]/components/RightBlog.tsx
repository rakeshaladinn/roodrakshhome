import DropMessage from "./DropMessage";
import TopRated from "./TopRated";
import LatestBlog from "./LatestBlog";
import TopCategories from "./TopCategories";
import FollowUs from "./FollowUs";

const RightBlog = ({ projects }: any) => {
  return (
    <div className="space-y-6  lg:my-24">
      <LatestBlog />
      <TopCategories />
      <TopRated projects={projects} />
      <DropMessage />
      <FollowUs />
    </div>
  );
};

export default RightBlog;
