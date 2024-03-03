import css from "./Options.module.css";
export const Options = ({ leaveFeedback, showResetBtn, resetFeedbacks }) => {
  return (
    <div className={css.list}>
      <button onClick={() => leaveFeedback("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => leaveFeedback("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => leaveFeedback("bad")} className={css.button}>
        Bad
      </button>
      {showResetBtn && (
        <button onClick={resetFeedbacks} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
};