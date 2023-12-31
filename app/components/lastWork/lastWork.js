import { TouchableHighlight, View } from "react-native-web";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Button } from "react-native";
import { Text } from "react-native-paper";
import { AuthContext } from "../../context/AuthContext";
import ReadMoreIcon from '@mui/icons-material/ReadMore';

export default function LastWork({ worksData }) {

    const [lastWork, setLastWork] = useState(null);
    const { getDataWork, setHomePage } = useContext(AuthContext);

    useEffect(() => {
        getLastWork();
    }, [lastWork])

    const handleOnPress = (id) => {
        getDataWork(id);
        setHomePage(false);
    }

    function getLastWork() {
        let last = worksData.sort((a, b) => new Date(b.user_work.createdAt).getTime() - new Date(a.user_work.createdAt).getTime())[0];
        setLastWork(last);
        console.log(last);
    }

    return (
        <View>
            {lastWork != null &&
                <TouchableHighlight onPress={() => handleOnPress(lastWork.id)} underlayColor="white">
                    <View style={style.cardContainer}>
                        <View style={style.cardTexts}>
                            <Text style={style.cardTitle}>{lastWork.name}</Text>
                            <Text style={style.cardDescription}>{lastWork.description}</Text>
                        </View>
                        <ReadMoreIcon style={{ color: "#db0007" }} />
                    </View>
                </TouchableHighlight>
            }
        </View>
    )
}

const style = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },
    cardTitle: {
        fontSize: 16,
        color: "black",
        fontWeight: 600
    },
    cardDescription: {
        fontSize: 12,
        color: "black"
    },
    cardTexts: {
        display: "flex",
        flexDirection: "column",
    }
})