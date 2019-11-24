import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { API } from "../api"
import { ISearchMakkchaParam, ISubway } from "../shared-interfaces"

interface IProps {

}
// https://api.makkcha.com/paths/sub?startX=126.7508563&startY=37.487626&endX=126.7208015&endY=37.4905169&curfewHour=23&curfewMin=0

const MainList: React.FC<IProps> = props => {
    const pointsConfig = {
        startX: 126.7508563,
        startY: 37.487626,
        endX: 126.7208015,
        endY: 37.4905169,
        curfewHour: null,
        curfewMin: null
    }
    const getData = async (pointsConfig: ISearchMakkchaParam): Promise<void> => {
        const data = await API.getSubway(pointsConfig)
        setData(data)
    }
    const [data, setData] = React.useState<ISubway[]>();
    React.useEffect(() => {
        getData(pointsConfig)
    }, []);
    console.log(data)
    return (
        <View>
            <Text style={{ color: "white", fontSize: 20 }}>막차</Text>
        </View>
    )

}

export default MainList