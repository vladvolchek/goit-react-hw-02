import css from "./Feedback.module.css";
export const Feedback = ({ data: { good, neutral, bad }, total, totalPercent }) => {
 
  return (
    <div>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li className={css.itemTotal}>Total: {total}</li>
        <li>Positive: {totalPercent}%</li>
      </ul>
    </div>
  );
};