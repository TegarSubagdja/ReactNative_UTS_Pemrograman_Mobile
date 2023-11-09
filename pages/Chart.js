import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import {
    LineChart,
} from "react-native-chart-kit";
import Colors from "../constant/Colors";

const Chart = () => {
    const [chartParentWidth, setChartParentWidth] = useState(0);
    const [input, setInput] = useState(''); // State untuk nilai input
    const [data, setData] = useState([1, 5, 2, 0, 2, 1]);

    const updateChart = () => {
        // Mengambil nilai input dan menggabungkannya dengan data yang ada
        const newData = [parseFloat(input) || 0, ...data.slice(0, 5)];
        setData(newData);
        setInput(''); // Mengosongkan input setelah memperbarui data
    };

    return (
        <View onLayout={({ nativeEvent }) => setChartParentWidth(nativeEvent.layout.width)}>
            <Text style={styles.title}>Bezier Line Chart</Text>

            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: data // Menggunakan data yang diperbarui
                        }
                    ]
                }}
                width={chartParentWidth}
                height={250}
                // yAxisLabel="$"
                // yAxisSuffix="k"
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: Colors.primary,
                    backgroundGradientFrom: Colors.primary,
                    backgroundGradientTo: Colors.primary,
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "2",
                        stroke: Colors.primary
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />

            <View style={styles.inputContainer}>
                {/* Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Value"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    keyboardType="numeric"
                />

                {/* Button untuk memperbarui grafik */}
                <TouchableOpacity style={styles.updateButton} onPress={updateChart}>
                    <Text style={styles.updateButtonText}>Update Chart</Text>
                </TouchableOpacity>
            </View>

            {/* Tambahkan kombinasi teks dengan nilai yang ada dalam state data */}
            <Text style={styles.chartValues}>Chart Values: {data.join(', ')}</Text>
        </View>
    );
};

export default Chart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        padding: 16,
    },
    title: {
        fontSize: 24,
        color: Colors.white,
        marginBottom: 16,
        textAlign: 'center',
    },
    inputContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: Colors.grayLight,
        borderRadius: 8,
        padding: 12,
        marginRight: 8,
        color: Colors.dark,
    },
    updateButton: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    updateButtonText: {
        fontSize: 18,
        color: Colors.white,
    },
    chartValues: {
        fontSize: 16,
        color: Colors.grayLight,
        marginTop: 16,
    }
});
