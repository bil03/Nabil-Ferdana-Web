export default function Meteor({ side, y, duration }) {
  const fromLeft = side === 'left';

  return (
    <div
      className="absolute"
      style={{
        width: '100px',
        height: '2px',
        borderRadius: '9999px',
        background: 'linear-gradient(45deg, white, transparent)',
        left: fromLeft ? '-10%' : '110%',
        top: `${y}%`,
        transform: `rotate(${fromLeft ? 45 : -45}deg)`,
        animation: `${fromLeft ? 'meteor-left' : 'meteor-right'} ${duration}s linear forwards`,
      }}
    />
  );
}
