import { Container,Icon, Title  } from "./styles";
import { TouchableOpacityProps} from 'react-native'
// para pegar as props nativas do touchableOpacity, ja que criamos ele a partir do styled component
type Props = TouchableOpacityProps & {
    title:string;

}

export function GroupCard({title}: Props){

    return(
        <Container>
            <Icon />
            <Title>{title}</Title>
        </Container>
    )
}