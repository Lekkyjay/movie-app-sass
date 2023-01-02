import './page-header.scss'
import bg from '../../assets/footer-bg.jpg'

interface IProps {
  children: React.ReactNode
}

export default function PageHeader({ children }: IProps) {
  return (
    <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
      <h2>{children}</h2>
    </div>
  )
}
