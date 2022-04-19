type AuthInputProps = {
  label: string
  value: any
  type?: 'text' | 'email' | 'password'
  required?: boolean
  OnChange: (newValue: any) => void
}

const AuthInput = ({
  label,
  value,
  OnChange,
  type = 'text',
  required = false
}: AuthInputProps) => (
  <div className={`flex flex-col mt-4`}>
    <label>{label}</label>
    <input
      className={`
        px-4 py-3 rounded-lg bg-gray-200 mt-2 
        border focus:border-blue-500 focus:outline-none focus:bg-white
      `}
      type={type}
      value={value}
      onChange={(e) => OnChange?.(e.target.value)}
      required={required}
    />
  </div>
)

export default AuthInput
