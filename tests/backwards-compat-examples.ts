import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { BackwardsCompatExamples } from "../target/types/backwards_compat_examples";

describe("backwards-compat-examples", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.BackwardsCompatExamples as Program<BackwardsCompatExamples>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
