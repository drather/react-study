import Card from "./Card";
import KsFooter from "./KsFooter";

function KksCard(props) {
    return (
        <Card Title="madebykks" backgroundColor="blue">
            <p>하이요</p>
            <p>리액트 최강자 김경석입니다</p>
            <p> 제가 만든 kkscard 컴포넌트는 어떠신지요? </p>
            <KsFooter/>
        </Card>
        
    );
}

export default KksCard;