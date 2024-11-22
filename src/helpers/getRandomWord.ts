const words: string[] = [
    "BOOK", "HISTORY", "EVENT", "STORE", "PROGRAMMING", "CODE",
    "DATABASE", "DATA", "DOCUMENT", "SERVER", "CLIENT", "USER",
    "FILE", "INTERFACE", "DESIGN", "TECHNOLOGY", "SYSTEM", "APPLICATION",
    "SOFTWARE", "HARDWARE", "NETWORK", "SECURITY", "VERSION", "UPDATE",
    "PROJECT", "TASK", "TEAM", "DEVELOPER", "LANGUAGE", "DEBUG",
    "COMPILER", "ALGORITHM", "VARIABLE", "FUNCTION", "OBJECT", "CLASS",
    "METHOD", "PROPERTY", "MODULE", "FRAMEWORK", "PACKAGE", "LIBRARY",
    "CONSTANT", "ARRAY", "STRING", "NUMBER", "BOOLEAN", "TYPE",
    "INTERPRETER", "EXECUTION", "PROCESS", "THREAD", "SESSION", "REQUEST",
    "RESPONSE", "PORT", "HOST", "DOMAIN", "PROTOCOL", "ENDPOINT"
  ];
  

export function getRandomWord(){

    const randomIndex=(Math.floor(Math.random()*words.length));

    return words[randomIndex];
}