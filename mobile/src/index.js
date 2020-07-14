import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";

import api from "./services/api";

export default function App() {
  const [projects, setProjects] = useState([]);

  async function handleAddProject() {
    const response = await api.post("/projects", {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Renato Almeida",
    });
    const project = response.data;
    setProjects([...projects, project]);
  }
  useEffect(() => {
    api.get("/projects").then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project} key={project.id}>
              {project.title}
            </Text>
          )}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>

      {/* <ScrollView style={styles.container}>
        {projects.map((project) => (
          <Text style={styles.project} key={project.id}>
            {project.title}
          </Text>
        ))}
      </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  project: {
    color: "#ffffff",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
