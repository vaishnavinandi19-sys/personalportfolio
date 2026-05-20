import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2024 — Present",
    title: "GenAI / LLM Engineer",
    company: "Walmart",
    link: "www.walmart.com",
    description:
"Working on enterprise-scale Generative AI, LLM, RAG, and Agentic AI solutions for retail and conversational commerce use cases, including a GenAI Retail Assistant and Merchant Copilot Platform. Built intelligent assistant and copilot capabilities using Azure OpenAI, GPT-4o, GPT-4 Turbo, Azure AI Foundry, LangChain, Semantic Kernel, LangGraph, MCP, ReAct, Azure AI Search, vector search, embeddings, Redis, and FastAPI to support personalized product discovery, contextual recommendations, customer query resolution, merchant insights, inventory intelligence, and product performance analysis.
Designed and deployed scalable GenAI workflows with Python, REST APIs, Docker, AKS, Helm, GitHub Actions, Azure DevOps CI/CD, Microsoft Fabric, OneLake, Synapse Analytics, Azure Data Factory, RAGAS, Promptflow, Prometheus, Evidently AI, and Azure Monitor. Focused on improving retrieval accuracy, reducing hallucinations, enabling multi-turn conversation memory, optimizing LLM inference latency, strengthening AI observability, and delivering secure, governed AI applications for large-scale retail operations."    skills: ["LLMs", "RAG", "Python", "LangChain", "AWS"],
  },
  {
    period: "2022 — 2024",
    title: "Senior Machine Learning Engineer(NLP, MLOps)",
    company: "Capital One",
    link: "www.capitalone.com",
    description:
"Worked on NLP, Machine Learning, LLM evaluation, and MLOps solutions for financial services use cases including credit risk, customer segmentation, communication classification, financial document summarization, customer intent analysis, and real-time credit decisioning. Built and deployed supervised learning, deep learning, and transformer-based models using Python, Scikit-learn, PyTorch, XGBoost, T5, BERT, DeBERTa, Sentence-BERT, GPT-3.5, Claude APIs, Amazon Bedrock, FAISS, Milvus, LSTM, GRU, and SHAP, improving model performance, explainability, and production reliability.

Designed scalable MLOps and model deployment workflows using AWS SageMaker, SageMaker Model Registry, EKS, Kubernetes HPA, Terraform, Docker, FastAPI, OAuth2, Apache Airflow, MLflow, Databricks, Delta Lake, Snowflake, SQL, ELK Stack, OPA, AWS Secrets Manager, and DevSecOps controls. Delivered secure, auditable, and low-latency ML systems with strong focus on model governance, Model Risk Management, feature engineering, A/B testing, drift monitoring, experiment tracking, CI/CD automation, and real-time inference optimization."    skills: ["PyTorch", "Transformers", "Docker", "Kubernetes", "GCP"],
  },
  {
    period: "2020 — 2022",
    title: "Data Scientist",
    company: "Highmark Health",
    link: "Highmarkhealth.com",
    description:
"Worked as a Data Scientist supporting healthcare analytics and machine learning initiatives across patient risk stratification, utilization forecasting, classification, operational decision support, and population health analytics. Designed end-to-end ML pipelines covering data ingestion, feature engineering, model training, validation, deployment, and monitoring using Python, SQL, Jupyter Notebook, Scikit-learn, TensorFlow, PyTorch, Logistic Regression, Random Forest, Gradient Boosting, and neural network-based models.

Built healthcare data pipelines and analytics solutions using Snowflake, Oracle, SQL Server, ETL, Apache Airflow, MLflow, DVC, AWS SageMaker, Docker, Kubernetes, REST APIs, GitHub Actions, Jenkins, Tableau, and Excel. Focused on improving model reliability, automating recurring healthcare analytics workflows, detecting feature drift and data anomalies, validating model performance using AUC-ROC, Precision, Recall, F1-score, MAE, and RMSE, and delivering actionable dashboards for clinical, business, and operational stakeholders."    skills: ["Python", "TensorFlow", "SQL", "Spark", "Tableau"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Experience
            </h2>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group grid md:grid-cols-[140px_1fr] gap-4 md:gap-8"
              >
                <p className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                    {exp.title} · {exp.company}
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
