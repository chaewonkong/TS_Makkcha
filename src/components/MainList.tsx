import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { API } from "../api"
import { ISearchMakkchaParam, IBusAndSubway, ITransportations, ITaxi, IDdarng, IOwlBus } from "../shared-interfaces"

interface IProps {

}
// https://api.makkcha.com/paths/sub?startX=126.7508563&startY=37.487626&endX=126.7208015&endY=37.4905169&curfewHour=23&curfewMin=0

const MainList: React.FC<IProps> = props => {
    const pointsConfig = {
        startX: 127.0485058,
        startY: 37.5827188,
        endX: 127.0083575,
        endY: 37.5613504,
    }
    const getData = async (pointsConfig: ISearchMakkchaParam): Promise<void> => {
        const dataFetchPromises: [Promise<IBusAndSubway[]>, Promise<IBusAndSubway[]>, Promise<IBusAndSubway[]>, Promise<ITaxi>, Promise<IOwlBus[]>, Promise<IDdarng[]>] = [
            API.getSubway(pointsConfig),
            API.getBus(pointsConfig),
            API.getBusAndSubway(pointsConfig),
            API.getTaxi(pointsConfig),
            API.getOwlBus(pointsConfig),
            API.getDdarng(pointsConfig)
        ];

        const [subway, bus, busAndSubway, taxi, owlbus, ddarng] = await Promise.all(dataFetchPromises)
        setData({ subway, bus, busAndSubway, taxi, owlbus, ddarng })
    }
    const [data, setData] = React.useState<ITransportations>();
    React.useEffect(() => {
        getData(pointsConfig)
    }, []);
    console.log(data)
    return (
        <View style={{ backgroundColor: "#000033", flex: 1 }}>
            <Text style={{ color: "white", fontSize: 20 }}>막차</Text>
        </View>
    )

}

export default MainList