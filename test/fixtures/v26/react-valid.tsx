export const Presentation = () => (
  <table>
    <tbody>
      <tr role="presentation">
        <td>Value</td>
      </tr>
    </tbody>
  </table>
);

export const Chart = () => <canvas role="img" aria-label="Chart" />;
export const Dialog = () => <div role="dialog" tabIndex={-1} />;
