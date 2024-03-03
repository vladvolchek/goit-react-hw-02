import { useEffect, useState } from "react";
import css from "./App.module.css";
import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Notification } from "./Notification/Notification";
import { Options } from "./Options/Options";

const getDataFromLocalstorage = () => {
  return (
    JSON.parse(window.localStorage.getItem("FeedBacks")) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );
};

export const App = () => {
  const [feedbacks, setFeedBacks] = useState(getDataFromLocalstorage);
  useEffect(() => {
    window.localStorage.setItem("FeedBacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const leaveFeedbacks = (name) => {
    setFeedBacks({
      ...feedbacks,
      [name]: feedbacks[name] + 1,
    });
  };

  const resetFeedbacks = () => {
    setFeedBacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  function getTotalFeedbacks() {
    return feedbacks.good + feedbacks.neutral + feedbacks.bad;
  }

  const totalFeedbacks = getTotalFeedbacks();

  return (
    <div className={css.app}>
      <Description />
      <Options
        leaveFeedback={leaveFeedbacks}
        resetFeedbacks={resetFeedbacks}
        showResetBtn={totalFeedbacks > 0}
      />
      {totalFeedbacks ? (
        <Feedback data={feedbacks} total={totalFeedbacks} />
      ) : (
        <Notification />
      )}
    </div>
  );
};