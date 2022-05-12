# SOLID

1 Single Responsibility principle
2 Open/Closed Principle
3 Liskov Substitution Principle
4 Interface Segregation Principle
5 Dependency Inversion Principle

1. Cada classe/funcao tem uma responssbilidade única;
2. As classes da aplicacao devem ser abertas para extensao mas fechadas para modificação
3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo conitnuar funcionando;
4.Tentar segregar as interfaces
5. em vez de criar ou proucurar algum objeto, a classe/funcao recebe esse objeto

5 = O submit_feedback_use_case tem uma dependencia, mas nao é ele que vai procurar o prismafeedbackreposiotry.