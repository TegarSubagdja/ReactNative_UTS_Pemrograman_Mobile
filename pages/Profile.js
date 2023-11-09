import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import Colors from "../constant/Colors";

const Profile = () => {
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [editedName, setEditedName] = useState("Tegar Subagdja");
    const [editedEmail, setEditedEmail] = useState("tegar.subagdja@mhs.itenas.ac.id");

    const toggleEditModal = () => {
        setEditModalVisible(!isEditModalVisible);
    };

    const saveProfileChanges = () => {
        // Perbarui state dengan nilai yang diinputkan oleh pengguna
        setEditedName(editedName);
        setEditedEmail(editedEmail);
        toggleEditModal();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/img/Profile.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.username}>{editedName}</Text>
                <Text style={styles.email}>{editedEmail}</Text>
            </View>

            <View style={styles.content}>
                <TouchableOpacity style={styles.button} onPress={toggleEditModal}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <Text style={styles.sectionTitle}>About Me</Text>
                <Text style={styles.aboutText}>
                    I am a fifth-semester student majoring in informatics at one of the private universities, namely the Institut Teknologi Nasional Bandung.
                </Text>
                <Text style={styles.sectionTitle}>Personal Information</Text>
                <Text style={styles.infoText}>Date of Birth: January 1, 1990</Text>
                <Text style={styles.infoText}>University: Institut Teknologi Nasional Bandung</Text>
                <Text style={styles.infoText}>Hobbies: Gym, Riding, Coding</Text>
            </View>

            {/* Modal untuk edit profil */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isEditModalVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Profile</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Name"
                            placeholderTextColor={Colors.grayLight}
                            value={editedName}
                            onChangeText={(text) => setEditedName(text)}
                        />
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Email"
                            placeholderTextColor={Colors.grayLight}
                            value={editedEmail}
                            onChangeText={(text) => setEditedEmail(text)}
                        />
                        <TouchableOpacity style={styles.modalButton} onPress={saveProfileChanges}>
                            <Text style={styles.modalButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        padding: 16,
    },
    header: {
        alignItems: 'center',
        marginTop: 24,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: Colors.white,
    },
    username: {
        fontSize: 24,
        color: Colors.white,
        marginTop: 16,
    },
    email: {
        fontSize: 16,
        color: Colors.grayLight,
        marginTop: 8,
    },
    content: {
        marginTop: 24,
    },
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: Colors.white,
    },
    sectionTitle: {
        fontSize: 20,
        color: Colors.white,
        marginTop: 16,
    },
    aboutText: {
        fontSize: 16,
        color: Colors.grayLight,
        marginTop: 8,
    },
    infoText: {
        fontSize: 16,
        color: Colors.grayLight,
        marginTop: 8,
    },
    // Styles for modal
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: Colors.dark,
        padding: 16,
        borderRadius: 8,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        color: Colors.primary,
        marginBottom: 16,
    },
    modalInput: {
        backgroundColor: Colors.graySecondary,
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        color: Colors.grayLight,
    },
    modalButton: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 18,
        color: Colors.white,
    }
});
