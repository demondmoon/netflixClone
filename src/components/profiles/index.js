import {Container, Title, List, User, Picture, Name} from './styles/profiles'

const Profiles = ({children, ...restProps}) =>{
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Profiles.Title = function ProfilesTitle ({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfilesList ({children, restProps}) {
  return <List  {...restProps} >{children}</List>
}

Profiles.User = function ProfilesUser ({children, ...restProps}) {
  return <User {...restProps}>{children}</User>
}

Profiles.Picture = function ProfilesPicture ({src, ...restProps}) {
  return <Picture  src={src ? require(`../../assets/images/users/${src}.png`).default : require(`../../assets/images/misc/loading.gif`).default} {...restProps} />
}

Profiles.Name = function ProfilesName ({children, ...restProps}) {
  return <Name {...restProps}>{children}</Name>
}






export default Profiles