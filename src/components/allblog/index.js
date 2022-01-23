import { SingleBlog } from '..';
import img from '/public/Can-I-Sell-my-Salem-Home-without-Any-Equity_-OG-2-400x250.jpg';

export default function AllBlog() {
  return (
    <section className="py-16">
      <div className="container px-4 gap-y-8 grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-10">
        <SingleBlog
          img={img}
          title="Buy House"
          data="Jan 25, 2022"
          desc="Contrary to popular belief, there are ways to sell your house fast even with extensive repairs in Salem, Oregon. Although you’ll likely have to sell it for much less, finding a..."
        />
        <SingleBlog
          img={img}
          title="Buy House"
          data="Jan 25, 2022"
          desc="Contrary to popular belief, fast even with extensive repairs in Salem, Oregon. Although you’ll likely have to sell it for much less, finding a..."
        />
        <SingleBlog
          img={img}
          title="Buy House"
          data="Jan 25, 2022"
          desc="Contrary to popular belief, there are ways to sell your house fast even with extensive repairs in Salem, Oregon. Although you’ll likely have to sell it for much less, finding a..."
        />
        <SingleBlog
          img={img}
          title="Buy House"
          data="Jan 25, 2022"
          desc="Contrary to popular belief, there are ways to sell your house fast even with extensive repairs in Salem, Oregon. Although you’ll likely have to sell it for much less, finding a..."
        />
        <SingleBlog
          img={img}
          title="Buy House"
          data="Jan 25, 2022"
          desc="Contrary to popular belief, there are ways to sell your house fast even with extensive repairs in Salem, Oregon. Although you’ll likely have to sell it for much less, finding a..."
        />
      </div>
    </section>
  );
}
