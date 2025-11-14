export const projects = [
    {
      title: "RAG-Pipeline / AI-Agent",
      description: "Intelligenter AI-Agent mit Retrieval-Augmented Generation für kontextbasierte Antworten und semantische Suche.",
      longDescription: "Dieses Projekt implementiert eine vollständige RAG-Pipeline unter Verwendung von LangChain. Nutzeranfragen werden zunächst in Vektoren umgewandelt und mit einer ChromaDB-Vektordatenbank abgeglichen, um relevante Kontext-Dokumente zu finden. Diese Dokumente werden dann zusammen mit der Originalanfrage an ein lokales LLM (via Ollama3) übergeben, um eine fundierte, nicht-halluzinierte Antwort zu generieren.",
      tags: ["Python", "LangChain", "ChromaDB", "Ollama3"],
      githubUrl: "https://github.com/dein-user/rag-pipeline",
      image: "/rag-project.jpg",
      category: "ai"
    },
    {
      title: "Netzwerk-Visualisierungs-Tool",
      description: "Interaktives Tool zur Visualisierung komplexer Netzwerkstrukturen mit Echtzeit-Updates und benutzerdefinierten Filtern.",
      longDescription: "Ein Frontend-Tool, das mit React und TypeScript entwickelt wurde, um komplexe Netzwerk-Topologien darzustellen. Es bindet eine Node.js-API an, um Live-Daten zu empfangen. Die Herausforderung bestand darin, eine performante Darstellung (z.B. mit D3.js oder einer ähnlichen Bibliothek) zu schaffen, die Hunderte von Knoten ohne Verzögerung verarbeiten kann.",
      tags: ["React", "TypeScript", "Node.js", "API"],
      githubUrl: null,
      image: "/network-switches.jpg",
      category: "frontend"
    },
    {
      title: "Budget-Tracking Backend",
      description: "RESTful API Backend für persönliches Budget-Management mit robuster Datenverwaltung und Authentifizierung.",
      longDescription: "Dieses Projekt ist ein reines Node.js/Express-Backend. Es bietet eine vollständige RESTful-API für eine Budget-App, einschließlich JWT-basierter Benutzerauthentifizierung und -autorisierung. Alle Finanztransaktionen werden in einer MongoDB-Datenbank gespeichert. Die API-Endpunkte sind vollständig dokumentiert (z.B. mit Postman) und decken alle CRUD-Operationen für Transaktionen und Kategorien ab.",
      tags: ["Node.js", "Express", "REST API", "MongoDB"],
      githubUrl: "https://github.com/dein-user/budget-tracker",
      image: "/budget-tracker.jpg",
      category: "backend"
    }
  ];