import Rattle from "./Rattle";
import "../assets/styles/list.css";

const RattleList = ({ rattles }) => {
  // const rattlesReversed = rattles.reverse();
  const renderRattles = () => {
    if (rattles && rattles.length !== 0) {
      return rattles.map((rattle) => (
        <Rattle rattleObj={rattle} key={rattle.username} />
      ));
    } else {
      return <p className="sorry">Sorry, there are no death rattles yet...</p>;
    }
  };

  return (
    <div className="list">
      <h1>
        RattleFeed &nbsp;
        <i className="fas fa-dove"></i>
      </h1>

      {renderRattles()}
    </div>
  );
};

export default RattleList;