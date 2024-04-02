export default function DividingLines({ color, length }) {
    return (
      <div style={{ width: "100%", height: "0px", borderTop: `3px ${color} solid`, marginTop: length }}></div>
    );
  }
  