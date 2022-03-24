export default function DateFormated({ stringDate, className }){
  stringDate = new Date(stringDate);
  stringDate = stringDate.toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })

  return (
    <span className={className}>{stringDate}</span>
  )
}