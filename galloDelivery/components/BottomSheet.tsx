import { StyleSheet, View, TouchableOpacity, Text } from "react-native"
import React, { forwardRef, useCallback,  useMemo } from "react"
import {  BottomSheetBackdrop, BottomSheetModal, BottomSheetView, useBottomSheetModal } from "@gorhom/bottom-sheet"
import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ['50%'], []);
    const renderBackdrop = useCallback((props: any) => 
        <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />      , [])
    const  { dismiss } = useBottomSheetModal();
    return (
        <BottomSheetModal ref={ref} snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        overDragResistanceFactor={0}
        handleIndicatorStyle={{display: 'none'}}
        backgroundStyle={{backgroundColor: Colors.lighGrey, borderRadius: 0}}>
            
            
            <BottomSheetView style={styles.contentContainer}>
                <View style={styles.toggle}>
                    <TouchableOpacity style={[styles.toogleButton, styles.toogleActive]}>
                        <Text style={styles.activeText}>Entrega</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.toogleButton, styles.toogleInactive]}>
                        <Text style={styles.inactiveText}>Entrega</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.subheader}> Minha Localização</Text>
                <Link href={'/'} asChild>
                <TouchableOpacity style={styles.item}>
                    <Ionicons name="location-outline" size={28} color={Colors.medium} />
                    <Text style={{ flex: 1}}>Localização atual</Text>
                    <Ionicons name="chevron-forward" size={20} color={Colors.primary} />

                </TouchableOpacity>
                </Link>
                <TouchableOpacity onPress={ () => dismiss() }>
                    <Text>Fechar</Text>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheetModal>
    )
});

export default BottomSheet

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        height: '100%',
    },
})
