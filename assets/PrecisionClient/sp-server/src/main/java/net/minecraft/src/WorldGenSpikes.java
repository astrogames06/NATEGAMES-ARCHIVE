package net.minecraft.src;

import net.lax1dude.eaglercraft.sp.EaglercraftRandom;

public class WorldGenSpikes extends WorldGenerator {
    /**
     * The Block ID that the generator is allowed to replace while generating the
     * terrain.
     */
    private final int replaceID;

    public WorldGenSpikes(int par1) {
        this.replaceID = par1;
    }

    public boolean generate(World par1World, EaglercraftRandom par2Random, int par3, int par4, int par5) {
        if (par1World.isAirBlock(par3, par4, par5) && par1World.getBlockId(par3, par4 - 1, par5) == this.replaceID) {
            int var6 = par2Random.nextInt(32) + 6;
            int var7 = par2Random.nextInt(4) + 1;
            int var8;
            int var9;
            int var10;
            int var11;

            for (var8 = par3 - var7; var8 <= par3 + var7; ++var8) {
                for (var9 = par5 - var7; var9 <= par5 + var7; ++var9) {
                    var10 = var8 - par3;
                    var11 = var9 - par5;

                    if (var10 * var10 + var11 * var11 <= var7 * var7 + 1
                            && par1World.getBlockId(var8, par4 - 1, var9) != this.replaceID) {
                        return false;
                    }
                }
            }

            for (var8 = par4; var8 < par4 + var6 && var8 < 128; ++var8) {
                for (var9 = par3 - var7; var9 <= par3 + var7; ++var9) {
                    for (var10 = par5 - var7; var10 <= par5 + var7; ++var10) {
                        var11 = var9 - par3;
                        int var12 = var10 - par5;

                        if (var11 * var11 + var12 * var12 <= var7 * var7 + 1) {
                            par1World.setBlock(var9, var8, var10, Block.obsidian.blockID, 0, 2);
                        }
                    }
                }
            }

            EntityEnderCrystal var13 = new EntityEnderCrystal(par1World);
            var13.setLocationAndAngles((float) par3 + 0.5F, par4 + var6,
                    (float) par5 + 0.5F, par2Random.nextFloat() * 360.0F, 0.0F);
            par1World.spawnEntityInWorld(var13);
            par1World.setBlock(par3, par4 + var6, par5, Block.bedrock.blockID, 0, 2);
            return true;
        } else {
            return false;
        }
    }
}
