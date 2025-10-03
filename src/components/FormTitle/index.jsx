import './form-title.style.css';

// props é um objeto
// props.filhos
// props.children
export function FormTitle (props) {
  return <h2 className='form-title'>{ props.children }</h2>
}