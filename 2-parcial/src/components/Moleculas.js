export const CardHeader = ({ color, titulo, codigo }) => (
  <div style={{ backgroundColor: color, padding: '10px', color: 'white' }}>
    {titulo} - {codigo}
  </div>
);