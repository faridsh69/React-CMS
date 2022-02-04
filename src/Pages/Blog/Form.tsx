export default function BlogForm() {
  return (
    <form>
      <input type="text" defaultValue="input" />
      <br />
      <input type="email" defaultValue="farid.sh69@gmail.com" />
      <br />
      <input type="number" defaultValue="123" />
      <br />
      <input type="date" defaultValue="2022-10-01" />
      <br />
      <input type="time" defaultValue="11:30" />
      <br />
      <input type="color" defaultValue="#e66465" />
      <br />
      <input type="password" defaultValue="123456" />
      <br />
      <textarea defaultValue="textarea" />
      <br />
      <input type="checkbox" />
      <br />
      <input type="radio" />
      <br />
      <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br />
      <select multiple>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br />
      <input type="file" />
    </form>
  );
}
