export default function Card({ className, Img, text }) {
  return (
    <li className={`card-item ${className}`}>
      <img src={Img} alt={Img} />
      <p>
        <strong>{text}</strong>
      </p>
    </li>
  );
}
