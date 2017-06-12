# DuplicateDetector-SHA256CryptoHash

▸ The SHA(Secure Hash Algorithm) is one of a number of cryptographic hash functions.

▸ A cryptographic hash is like a signature for a text or a data file.

▸ SHA-256 algorithm generates an almost-unique, fixed size 256-bit (32-byte) hash.

▸ Hash is a one way function – it cannot be decrypted back.

▸ This makes it suitable for password validation, challenge hash authentication, anti-tamper, digital signatures.

▸ The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign   and verify functions.

▸ We can use a SHA256 hash to generate a unique identifier based on the contents of a file. 

  a node.js application that:
  
▸ Takes a directory as a command-line-argument
▸ Traverses the directory
▸ Traverses all sub-directories
▸ Prints out all filenames (full-path) that are duplicates of each other.

▸ Documentation: https://nodejs.org/api/crypto.html#crypto_class_hash

▸ source :  http://www.xorbin.com/tools/sha256-hash-calculator


