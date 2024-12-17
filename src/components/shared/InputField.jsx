export default function InputField({ id, type, placeholder, labelText, value, onChange, errorMessage }) {
    return (
      <div className="form-floating mb-3">
        <input
          type={type}
          className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <label htmlFor={id} className="text-secondary">
          {labelText}
        </label>
        {errorMessage && <small className="text-danger">{errorMessage}</small>}
      </div>
    );
  }
  
  