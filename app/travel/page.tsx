import { Nav } from "../../components/editorial/Nav";
import { Footer } from "../../components/editorial/Footer";
import { WorldMap } from "../../components/WorldMap/WorldMap";
import classes from "../../components/editorial/editorial.module.css";

const places = [
  {
    title: "Brazil",
    desc: "Where it all started — born and raised before the moving began",
    meta: "Home",
  },
  {
    title: "Ecuador",
    desc: "The Andes, and a first taste of life somewhere completely new",
    meta: "Lived",
  },
  {
    title: "Ghana",
    desc: "West Africa — warmth, color, and a very different pace of life",
    meta: "Lived",
  },
  {
    title: "Dominican Republic",
    desc: "Caribbean years, all coastline and sun",
    meta: "Lived",
  },
  {
    title: "United States",
    desc: "Michigan for school, and a long road trip out to the American West",
    meta: "Now",
  },
];

export default function Travel() {
  return (
    <div className={classes.page}>
      <div className={classes.shellWide}>
        <Nav active="/travel" />

        <h1 className={classes.pageTitle}>Around the World</h1>
        <p className={classes.pageIntro}>
          I grew up moving — four countries before I really settled anywhere.
          Here&apos;s a map of the places that shaped me, and where the road has
          taken me since.
        </p>

        <div className={classes.mapWrap}>
          <WorldMap />
        </div>

        <div className={classes.section}>
          <p className={classes.sectionLabel}>Places that shaped me</p>
          {places.map((p) => (
            <div
              key={p.title}
              className={`${classes.row} ${classes.rowStatic}`}
            >
              <span className={classes.rowMain}>
                <span className={classes.rowTitle}>{p.title}</span>
                <span className={classes.rowDesc}>{p.desc}</span>
              </span>
              <span className={classes.rowMeta}>{p.meta}</span>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
